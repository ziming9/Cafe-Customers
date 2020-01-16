import React from 'react';

const footer = props => (
    <footer className="footer text-white mt-5 p-4 text-center" style={{ backgroundColor: '#344955' }}>
        Copyright &copy; {new Date().getFullYear()} Cafe Customers
    </footer>
)

export default footer;