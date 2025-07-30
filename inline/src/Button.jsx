// Using Inline Styles

function Button(){
    // Create a javascript object
    // CamelCase, no dashes
    // All values must be in strings
    // Each value must be seperated. Commas no semi-colons.

    const styles = {
        
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
}
    // Insert dynamic styling
    return(<button style={styles}>CLICK ME</button>);
}
 export default Button