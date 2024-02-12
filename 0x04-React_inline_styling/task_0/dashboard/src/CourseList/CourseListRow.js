import React from "react";
import PropTypes from "prop-types";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    const rowStyles = { backgroundColor: "#f5f5f5ab" };
    const headerRowStyles = { backgroundColor: "#deb5b545" };

    if (isHeader === true) {
        if (textSecondCell === null) {
            return <tr style={headerRowStyles}><th colSpan="2">{textFirstCell}</th></tr>;
        } else {
            return (
                <tr style={headerRowStyles}>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </tr>
            );
        }
    } else if (isHeader === false) {
        return (
            <tr style={rowStyles}>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        );
    }

    return null; // Default case
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
