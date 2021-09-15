import React from 'react';
import list from '../service/peopleList'
import People from './people'
import '../index.css'


class Peoples extends React.Component {
    state = {
        items: list
    };

    handleDelete = (id) => {
        const list = this.state.items.filter(item => item.id !== id);
        this.setState({ items: list });
    }

    clearAll = () => {
        // console.log('Checker');
        const list = [];
        this.setState({ items: list });
    }

    render() {
        const { items } = this.state;
        return (
            <div className="container">
                <h2 className="birthdayCount">{this.state.items.length} People's Birthday</h2>
                {
                    items.map(item => (
                        <People key={item.id} uniq={item.id} name={item.name} age={item.age} url={item.url} onDelete={this.handleDelete} />
                    ))
                }

                <button onClick={() => this.clearAll()} className="btn-large"> Clear All</button>

            </div>
        );
    }
}

export default Peoples;