import React, { Component } from 'react';

import styles from '../css/blog.module.css';
import '../css/slick-slider.css';
import '../css/vendor.css'
import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom';
import $ from 'jquery';
const WOW = require("../lib/wow/wow.min.js");

class BlogPost extends Component {

    componentDidMount() {
        new WOW().init()
    }

    render() {
        const props = this.props;
        const date = new Date(props.date).toDateString();
        const escaped_title = props.title.replace(/\./g,'&#46;').replace(/\//g,'&#47;')
        return (
            <article className={styles.colBlock}>  
                <div data-wow-duration="1s" data-wow-delay="1s" className={`${styles.itemEntry} wow fadeInUp`}>
                    <div id="postDiv" className={styles.itemEntryThumb}>
                        <LazyLoad><div style={{height: 300, background: `url('${props.headerImg}?w=400&') center top no-repeat`, backgroundSize: 'cover'}} className={styles.itemEntryThumbLink} /></LazyLoad> 
                    </div> 
                    <div className={styles.itemEntryText}>
                        <div className={styles.itemEntryCat}>{props.catagory}</div>
                        <h1 className={styles.itemEntryTitle}><Link to={`/blog/article/${encodeURI(props.catagory)}/computerengineering/${props.id}`}>{props.title}</Link></h1>
                        <div className={styles.itemEntryDate}>{date}</div>
                    </div>
                </div> 
            </article> 
        )
    }
}

export default BlogPost;