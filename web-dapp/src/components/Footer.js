import React from 'react';

class Footer extends React.Component {
    render () {
        return (
            <footer className="main-footer align-self-end footer">
                <div className="col-md-12 container">
                    <div className="row">

                        <div className="col-md-6 sm-center pd-sm-3">
                            <span className="bottom-copy">2018 POA Networks. All rights reserved.</span>
                        </div>

                        <div className="col-md-6 sm-center pd-sm-3 text-right">
                            <a className="footer-social" href="https://twitter.com/poanetwork" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16">
                                    <path fill="#5C34A2" fillRule="evenodd"
                                          d="M19.449.296a8.358 8.358 0 0 1-2.608.98A4.12 4.12 0 0 0 13.847 0c-2.266 0-4.103 1.81-4.103 4.04 0 .316.036.625.106.92A11.71 11.71 0 0 1 1.393.739a3.965 3.965 0 0 0-.555 2.03c0 1.403.726 2.639 1.825 3.363a4.158 4.158 0 0 1-1.858-.508v.051c0 1.957 1.415 3.589 3.291 3.962a4.177 4.177 0 0 1-1.854.068c.522 1.605 2.037 2.773 3.832 2.807A8.313 8.313 0 0 1 .979 14.24c-.332 0-.658-.019-.979-.055A11.747 11.747 0 0 0 6.29 16c7.546 0 11.673-6.156 11.673-11.495l-.013-.524A8.186 8.186 0 0 0 20 1.893a8.324 8.324 0 0 1-2.356.637A4.078 4.078 0 0 0 19.449.296z"/>
                                </svg>
                            </a>
                            <a className="footer-social" href="https://medium.com/poa-network" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16">
                                    <path fill="#5C34A2" fillRule="evenodd"
                                          d="M0 16h5.954v-.308L4 13V5l4.855 11h.458L14 4v10l-1.939 1.692V16H20v-.308L18 14V2l2-1.692V0h-5.496l-3.97 9.846L5.954 0H.305v.308L2 3v10l-2 2.692V16z"/>
                                </svg>
                            </a>
                            <a className="footer-social" href="https://t.me/poa_network" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18">
                                    <path fill="#5C34A2" fillRule="evenodd"
                                          d="M.353 8.631l4.609 1.778 1.784 5.93c.114.38.563.52.861.268l2.569-2.165a.746.746 0 0 1 .934-.026l4.633 3.477c.319.24.771.059.851-.34L19.988.676c.088-.435-.326-.798-.727-.638L.348 7.581c-.467.186-.463.869.005 1.05zm6.105.832l9.007-5.735c.162-.102.328.124.189.257l-7.433 7.143c-.261.251-.43.587-.477.953L7.49 14.02a.231.231 0 0 1-.454.034l-.974-3.537a.95.95 0 0 1 .396-1.054z"/>
                                </svg>
                            </a>
                            <a className="footer-social" href="https://github.com/poanetwork" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                    <path fill="#5C34A2" fillRule="evenodd"
                                          d="M18.66 5.105a10.09 10.09 0 0 0-3.64-3.732A9.606 9.606 0 0 0 10-.002a9.604 9.604 0 0 0-5.02 1.375 10.082 10.082 0 0 0-3.64 3.732C.446 6.675-.002 8.391-.002 10.251c0 2.234.636 4.242 1.908 6.027 1.272 1.784 2.915 3.019 4.929 3.704.235.045.408.013.521-.093a.53.53 0 0 0 .17-.4l-.007-.721c-.004-.454-.007-.85-.007-1.188l-.299.053a3.823 3.823 0 0 1-.723.047 5.466 5.466 0 0 1-.905-.094 2.01 2.01 0 0 1-.873-.4 1.685 1.685 0 0 1-.572-.821l-.131-.307a3.333 3.333 0 0 0-.41-.681c-.187-.249-.375-.418-.566-.507l-.092-.067a1.015 1.015 0 0 1-.169-.16.756.756 0 0 1-.117-.187c-.026-.063-.004-.114.065-.154.07-.04.196-.06.378-.06l.26.04c.174.036.389.142.645.321.256.177.466.409.631.693.2.365.441.643.723.835.282.191.567.287.853.287.287 0 .534-.022.742-.067a2.5 2.5 0 0 0 .586-.2c.078-.596.291-1.055.638-1.375a8.78 8.78 0 0 1-1.334-.24 5.27 5.27 0 0 1-1.224-.521 3.52 3.52 0 0 1-1.049-.895c-.278-.356-.506-.823-.684-1.401-.177-.579-.266-1.246-.266-2.003 0-1.077.343-1.993 1.029-2.75-.322-.81-.291-1.717.091-2.723.251-.08.625-.02 1.12.18.494.2.857.372 1.087.514.23.142.415.263.554.361a9.006 9.006 0 0 1 2.5-.347c.859 0 1.693.115 2.501.347l.494-.321a7.04 7.04 0 0 1 1.198-.587c.461-.178.812-.227 1.055-.147.391 1.006.426 1.914.105 2.723.685.757 1.028 1.673 1.028 2.75 0 .757-.089 1.427-.267 2.01-.178.582-.407 1.049-.69 1.401a3.65 3.65 0 0 1-1.055.888 5.27 5.27 0 0 1-1.224.521 8.77 8.77 0 0 1-1.335.24c.452.4.678 1.032.678 1.896v2.816c0 .16.054.294.162.4.109.107.28.138.515.094 2.014-.685 3.657-1.92 4.929-3.705 1.272-1.784 1.908-3.793 1.908-6.027-.001-1.859-.448-3.575-1.342-5.145z"/>
                                </svg>
                            </a>
                        </div>

                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
