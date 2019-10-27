import React, { useState, useEffect } from 'react';
import "./footer.css";
import "../../App.js";
import { Link } from "react-router-dom";
import TokenComponent from '../../api/TokenComponent';

function Footer() {




    return (
        <div className="Footer">
            <footer class="page-footer font-small blue">

              
            <div class="footer-copyright text-center py-3">© 2018 Copyright:
                <p> Sam-corp</p>
                            </div>
                            
                        
            </footer>
        </div>
    );
}

export default Footer;
