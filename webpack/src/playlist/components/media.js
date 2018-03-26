import React from "react";
//también puedo poner Componente entre llaves después de React y borrarlo del siguiente paso.
class Media extends React.Component {
    render() {
        const styles ={
            fontSize: 14,
            //14 se entiende como pixels en React
            backgroundColor: "red",
        }
    }
        return (
            <div style={styles.container}
                <div>
                    <img 
                        src=""
                        alt=""
                        width={260}
                        height={160}
                    />
                <h3>Title</h3>
                <p>Decription</p>
                </div>
            </div>
        )
    }
}

export default Media;