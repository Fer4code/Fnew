import React,{ useContext } from "react";
import { ThemeContext } from '../../context'
import "./product.css";

const Product = ({link,name,language,pushed}) => {
const theme = useContext(ThemeContext);
const darkMode = theme.state.darkMode;
  return (
    <div className="p">
        <h4 className='title'>{name}</h4>
        <h6 className='pushed'>{pushed}</h6>
        <h6 className='language'>{language}</h6>


    </div>
  );
};

export default Product;