import React from 'react';


class People extends React.Component {
    render() {
        const { name, age, url, onDelete, uniq } = this.props;
        return (
            <div className="outerbody">
                <div className="imagebody">
                    <img className="image" src={url} alt="" />
                </div>
                <div className="dummy">
                    <p><b>{name}</b></p>
                    <p>{age}</p>
                </div>
                <button className="btn btn-outline-danger" onClick={() => onDelete(uniq)}>X</button>
            </div>
        );
    }
}

export default People;