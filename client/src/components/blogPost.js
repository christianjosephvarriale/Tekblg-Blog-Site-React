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
        const escaped_title = props.title.replace(/\./g,'&#46;').replace(/\//g,'&#47;')
        return (
            <article className={styles.colBlock}>  
                <div data-wow-duration="1s" data-wow-delay="1s" className={`${styles.itemEntry} wow fadeInUp`}>
                    <div className={styles.itemEntryThumb}>
                        <div className={styles.itemEntryThumbLink}> 
                            <LazyLoad> <img src={props.headerImg} alt=""/> </LazyLoad>
                        </div>
                    </div> 
                    <div className={styles.itemEntryText}>
                        <div className={styles.itemEntryCat}>{props.catagory}</div>
                        <h1 className={styles.itemEntryTitle}><Link to={`/blog/article/${encodeURI(props.catagory)}/computerengineering/${props.id}`}>{props.title}</Link></h1>
                        <div className={styles.itemEntryDate}>{props.date}</div>
                    </div>
                </div> 
            </article> 
        )
    }
}

export default BlogPost;