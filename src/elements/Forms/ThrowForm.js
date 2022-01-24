import React from "react";
import ThrowFormBuild from "./ThrowFormBuild";
import cities from "../../Cities";

class ThrowForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            cboxChecked: false,
            verify: { product: null, material: false, location: true, form: null },
        }

        this.product = { name: null, material: null }
        this.city    = { name: null, zip: null, found: false }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.validateField(name, value, e);
    }

    validateField(fieldName, value, e) {
        const loc = document.getElementById("fpvzmxn");
        const com = document.getElementById("city")
        let validated = this.state.verify;

        switch(fieldName) {
            case "product":
                validated.product = (!value.match(/[^a-zéèêâà']/i) && value.length >= 2) ? true : false;
                e.target.className = (validated.product) ? "validP" : "invalidP";
                this.product.name = value;
                break;
            case "material":
                validated.material = (value !== "default") ? true : false;
                this.product.material = value;
                break;
            case "checkbox":
                this.state.cboxChecked = !this.state.cboxChecked;
                if(this.state.cboxChecked) {
                    loc.style.display = "inline";
                    const index = cities.findIndex(cityData => cityData.zip === this.city.zip);
                    validated.location = (index !== -1) ? true : false;
                }else {
                    loc.style.display = "none";
                    validated.location = true;
                }
                break;
            case "map":
                if(e.target.id !== "city") {
                    const arrayData = cities.filter(cityData => cityData.zip === value);
                    validated.location = (arrayData.length !== 0) ? true : false;
                    e.target.className = (validated.location) ? "validL" : "invalidL";
                    this.city.zip = value;

                    if(validated.location) {
                        validated.location = false;
                        this.city.found = true;
                        arrayData.forEach(cityData => {
                            const option = document.createElement('option');
                            option.innerHTML = cityData.name;
                            com.appendChild(option)
                        })
                    }else {
                        this.city.found = false;
                        const option = document.createElement('option');
                        com.innerHTML = '';
                        option.innerHTML = "...";
                        option.value = "default";
                        option.setAttribute("defaultValue","defaultValue");
                        option.style.display = "none";
                        com.appendChild(option);
                    }
                } else {
                    validated.location = (value !== "default" && this.city.found) ? true : false;
                    this.city.name = value;
                }
                break;
            default: break;
        }

        validated.form = this.state.verify.product && this.state.verify.material && this.state.verify.location;
        this.setState(this.state.verify = validated);
        console.log(validated)
      }

    TF_settings = [
        {   
            id: "ezpfdbe",
            divForm:   { className: "FormGroup", display: "inline" },
            labelForm: { text: "Nom de l'objet :" },
            inputForm: { className: '', type: "text", name: "product" },
        },{ 
            id: "nfozxfm",
            divForm:   { className: "FormGroup", display: "inline" },
            labelForm: { text: "Quelle est la matière principale de votre objet ?" },
            inputForm: { className: '', type: "text", name: "material" },
        },{
            id: "xbanolm",
            divForm:   { className: "FormGroup", display: "inline" },
            labelForm: { text: "Veuillez cocher cette case si l'objet est volumineux :" },
            inputForm: { type: "checkbox", name: "checkbox" },
        },{
            id: "fpvzmxn",
            divForm:   { className: "FormGroup", display: "none" },
            labelForm: { text: "Localisation :" },
            inputForm: { className: '', type: "text", name: "map" },
        }
    ]

    render() {
        return (
            <form id="ThrowForm">
                { this.TF_settings.map((setAtt) => <ThrowFormBuild {...this.props} setAtt={setAtt} key={setAtt.id} event={this.handleUserInput}/>) }

                <button type="button" ref={e => (this.btn = e)} disabled={!this.state.verify.form}>Chercher</button>
            </form>
        )
    } 
}

export default ThrowForm;