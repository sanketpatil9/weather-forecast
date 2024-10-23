// import React from 'react';

// const Header = () => {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
//             <div className="container-fluid">
//                 <a href="/" className="navbar-brand mx-auto">
//                     <h1 className="text-primary text-center fw-bold mb-0">
//                         Weather App
//                     </h1>
//                 </a>
//             </div>
//         </nav>
//     );
// };

// export default Header;

import React from 'react';
import cloudImage from '../../Assest/Images/weather app header img.webp';
import styles from './Header.module.scss'; // Import the SCSS file

const Header = () => {
    return (
        <header className="bg-light text-white py-3 shadow-sm position-relative">
            <div className="container text-center">
                <h1 className="fw-bold text-danger">SkyCast</h1>
                <img
                    src={cloudImage}
                    alt="Cloud"
                    className={styles.cloudImage} // Use className for styles
                />
            </div>
        </header>
    );
};

export default Header;
