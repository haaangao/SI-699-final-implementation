import * as React from "react";

const navData = [
        {
            dot:
                "https://i.ibb.co/HDtZsYK/spots.png",
            route: "Media Gateway",
            icon:
                "https://i.ibb.co/1QXysg0/go.png",
        },
        {
            dot:
                "https://i.ibb.co/yBPJqjR/dots.png",
            route: "Exit from the west entrance",
            icon:
                "https://i.ibb.co/wS2214W/entrance.png",
        },
        {
            dot:
                "https://i.ibb.co/yBPJqjR/dots.png",
            route: "Go straight to the next build",
            icon:
                "https://i.ibb.co/Vx1QgbM/straight.png",
        },
        {
            dot:
                "https://i.ibb.co/HDtZsYK/spots.png",
            route: "Enter from the left",
            icon:
                "https://i.ibb.co/1QXysg0/go.png",
        },    
        {
            dot:
                "https://i.ibb.co/yBPJqjR/dots.png",
            route: "Make a right when you get to the hallway",
            icon:
                "https://i.ibb.co/wS2214W/right.png",
        },
        {
            dot:
                "https://i.ibb.co/yBPJqjR/dots.png",
            route: "Go straight",
            icon:
                "https://i.ibb.co/r5XzKcc/straight.png",
        },
        {
            dot:
                "https://i.ibb.co/HDtZsYK/spots.png",
            route: "Space 2435",
            icon:
                "https://i.ibb.co/1QXysg0/go.png",
        },
    ]

export class DataInCode extends React.Component {
    // Set default properties
    static defaultProps = {
        width: 360,
        height: 560
    };

    render() {
        return (
            <div style={wrapStyle}>
                {navData.map((card, i) => (
                    <div
                        style={cardStyle}
                        key={`card-${i}`}
                    >
                        <div
                            style={{
                                ...dotStyle,
                                ...{ backgroundImage: `url(${card.dot})` }
                            }}
                        />
                        <div style={routeStyle}>{card.route}</div>
                        <div
                            style={{
                                ...iconStyle,
                                ...{ backgroundImage: `url(${card.icon})` }
                            }}
                        />
                    </div>
                ))}
            </div>
        );
    }
}

const wrapStyle: React.CSSProperties = {

    width: "100%",
    height: "90%",
    flexDirection: "column",
    padding: "0px 22px 10px 22px",
    overflow: "scroll",
    margin: "0 auto",
    marginTop: "10px",
    marginBottom: "48px",
};

const cardStyle: React.CSSProperties = {
    padding: "30px 0px 30px 20px",
};

const dotStyle: React.CSSProperties = {
    height: "18px",
    width: "18px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "inline-block",
};

const routeStyle: React.CSSProperties = {
    color: "black",
    display: "inline-block",
    paddingLeft: "10px",
    width: "200px",
    marginLeft: "10px",
    marginRight: "20px",
    fontFamily: "roboto",
    fontSize: "16px",
};

const iconStyle: React.CSSProperties = {
    height: "28px",
    width: "28px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    display: "inline-block",
};