import React from "react";

class TBuild extends React.Component {
    render() {
        return (
            <>
                <div id="xbanolm" className="form-field">
                    <label>L'objet est-il volumineux ? (Encombrant)</label>
                    <input className="input_checkbox" type="checkbox" name="checkbox" onClick={this.props.event}></input>
                </div>

                <div id="ezpfdbe" className="form-field">
                    <dl className="inputbox">
                        <dd className="inputbox-content">
                            <input className="content-data" type="text" name="product" minLength = "1" maxLength="40" 
                                   onChange={this.props.event} required/>
                            <label className="label-animation" htmlFor="content-data">Nom de l'objet :</label>
                            <span className="underline-animation"></span>
                        </dd>
                    </dl>
                </div>

                <div id="nfozxfm" className="form-field">
                    <dl className="inputbox">
                        <dd className="inputbox-content">
                            <select className="content-data" name="material" onChange={this.props.event} required>
                                <option value="" defaultValue hidden/>
                                <option value="bois">Bois</option>
                                <option value="metal">Métal</option>
                                <option value="ceramique">Céramique</option>
                                <option value="verre">Verre</option>
                                <option value="plastique">Plastique</option>
                                <option value="textile">Textiles</option>
                                <option value="cuir">Cuir</option>
                                <option value="papier_carton">Papier ou Carton</option> 
                                <option value="caoutchouc">Caoutchouc</option>
                            </select>
                            <label className="label-animation" htmlFor="content-data">Matériel de l'objet :</label>
                            <span className="underline-animation"></span>
                        </dd>
                    </dl>
                </div>

                <div id="fpvzmxn" className="form_coord_zip" disabled>
                    <dl className="inputbox">
                        <dd className="inputbox-content">
                            <input className="content-data" type="text" name="map" minLength = "1" maxLength="5" 
                                    onChange={this.props.event} required/>
                            <label className="label-animation" htmlFor="content-data">Code Postal :</label>
                            <span className="underline-animation"></span>
                        </dd>
                    </dl>
                </div>

                <div id="ibizbef" className="form_coord_city" disabled>
                <dl className="inputbox">
                        <dd className="inputbox-content">
                            <select id="city" className="content-data" name="map" onChange={this.props.event} required>
                                <option value="" defaultValue hidden/>
                            </select>
                            <label className="label-animation" htmlFor="content-data">Ville :</label>
                            <span className="underline-animation"></span>
                        </dd>
                    </dl>
                </div>
            </>
        )
    }
}

export default TBuild;