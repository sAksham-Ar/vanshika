import Particles from 'react-particles-js';
function particles(){
    return(
        <Particles
        className="particles"
        params={{
            "particles": {
                "number": {
                    "value": 10,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "speed": 1,
                    "out_mode": "out"
                },
                "shape": {
                    "type": [
                        "image"
                    ],
                    "image": [
                        {
                            "src": "/happy.png",
                            "height": 500,
                            "width": 500
                        },
                        {
                            "src": "/birthday.png",
                            "height": 500,
                            "width": 500
                        }
                    ]
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }},
                "color": {
                    "value": "#CCC"
                },
                "size": {
                    "value": 100,
                    "random": false,
                    "anim": {
                        "enable": true,
                        "speed": 8,
                        "size_min": 10,
                        "sync": false
                    }
                }
            },
            "retina_detect": false
        }} />
    );
}
export default particles;