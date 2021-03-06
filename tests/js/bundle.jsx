/**
 * @jsx React.DOM
 */

var React = require('react');
var Person = React.createClass({
    getInitialState: function () {
        return {
            nome: 'Sem nome :(',
            email: 'Sem email :('
        };
    },
    render: function () {
        return (
            <div class="person">
                <p><strong>Nome: </strong><span>{ this.props.nome }</span></p>
                <p><strong>E-mail: </strong><span>{ this.props.email }</span></p>
            </div>
        );
    }
});

module.exports = {
    libs: {
        React: React
    },
    components: {
        Person: Person
    }
};
