import React, { Component } from 'react';

import styles from '../css/blog.module.css';
import '../css/slick-slider.css';
import '../css/vendor.css'
import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom';
const WOW = require("../lib/wow/wow.min.js");

class BlogPost extends Component {

    componentDidMount() {
        
        new WOW().init()
    
    }

    render() {
        const props = this.props;
        return (
            <article className={styles.colBlock}>  
                <div data-wow-duration="1s" data-wow-delay="1s" className={`${styles.itemEntry} wow fadeInUp`}>
                    <div className={styles.itemEntryThumb}>
                        <Link to={'/blog/post/' + props.id} className={styles.itemEntryThumbLink}>
                            <LazyLoad>
                                <img src={props.headerImg} alt=""/>
                            </LazyLoad>
                        </Link>
                    </div> 
                    <div className={styles.itemEntryText}>
                        <div className={styles.itemEntryCat}>
                            <Link to={'/blog/post/' + props.id}>{props.catagory}</Link>
                        </div>
                        <h1 className={styles.itemEntryTitle}><Link to={'/blog/post/' + props.id}>{props.title}</Link></h1>
                        <div className={styles.itemEntryDate}>
                            <Link to={'/blog/post/' + props.id} role="menuitem">{props.date}</Link>
                        </div>
                    </div>
                </div> 
            </article> 
        )
    }
}

export default BlogPost;