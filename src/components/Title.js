import PropTypes from "prop-types";

const Title = ({ name, type: fontWeight }) => {
    return <h2 style={{ fontWeight }}>{name}</h2>;
};

Title.propTypes = {
    name: PropTypes.string,
    type: PropTypes.oneOf(["normal", "bold"])
};

Title.defaultProps = {
    name: "Title",
    type: "normal"
}

export default Title;