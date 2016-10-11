import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <span className="development-by">Desenvolvido por emir.liz</span>
                    <a href="https://www.facebook.com/emir.marquesdeliz" className="social-icon">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com/emirdeliz" className="social-icon">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://br.linkedin.com/in/emir-marques-778b3114" className="social-icon">
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/emirdeliz/meus-projetos" className="social-icon">
                        <i className="fa fa-github"></i>
                    </a>
                </div>
            </footer>
        );
    }
}
