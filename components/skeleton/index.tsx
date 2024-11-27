import React from "react";
import styles from './style.module.scss';

interface SkeletonProps {
    width?:number,
    height?:number,
}

function Skeleton({width, height}:SkeletonProps) {
  return <div className={`${styles["skeleton"]}`} style={{width, height}}></div>;
}

export default Skeleton;
