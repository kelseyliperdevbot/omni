import type { NextPage } from "next";
import styles from "./index.module.css";

const Frame: NextPage = () => {
  return (
    <div className={styles.div}>
      <img className={styles.backgroundIcon} alt="" src="/background.svg" />
      <img className={styles.scrollIcon} alt="" src="/scroll.svg" />
      <div className={styles.menu}>
        <b className={styles.overview}>Overview</b>
        <b className={styles.overview}>Features</b>
        <b className={styles.overview}>Pricing</b>
        <b className={styles.overview}>About</b>
      </div>
      <div className={styles.content}>
        <b className={styles.disciplineWillTakeContainer}>
          <p className={styles.disciplineWill}>{`Discipline will `}</p>
          <p className={styles.disciplineWill}>{`take you places `}</p>
          <p className={styles.disciplineWill}>motivation can't</p>
        </b>
        <b className={styles.designSmarterNot}>DESIGN SMARTER, NOT HARDER</b>
        <div className={styles.ametMinimMollitContainer}>
          <p
            className={styles.disciplineWill}
          >{`Amet minim mollit non deserunt ullamco est sit aliqua dolor `}</p>
          <p
            className={styles.disciplineWill}
          >{`do amet sint. Velit officia consequat duis enim velit mollit. `}</p>
          <p className={styles.disciplineWill}>
            Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className={styles.mainCta}>
          <b className={styles.scheduleADemo}>Schedule a Demo</b>
        </div>
        <div className={styles.secondaryButton}>
          <b className={styles.scheduleADemo}>Contact Sales</b>
        </div>
      </div>
      <img className={styles.logoIcon} alt="" src="/logo.svg" />
      <div className={styles.signIn}>
        <b className={styles.scheduleADemo}>Sign In</b>
      </div>
      <div className={styles.browser}>
        <div className={styles.groupParent}>
          <div className={styles.groupParent}>
            <img className={styles.screenIcon} alt="" src="/screen.svg" />
            <img className={styles.screenIcon1} alt="" src="/screen1.svg" />
            <img className={styles.screenIcon2} alt="" src="/screen2.svg" />
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <div className={styles.vectorParent}>
                <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
                <div className={styles.appyourappio}>app.yourapp.io</div>
              </div>
              <div className={styles.groupItem} />
              <div className={styles.groupInner} />
              <div className={styles.ellipseDiv} />
              <img
                className={styles.groupChild1}
                alt=""
                src="/vector-137.svg"
              />
              <img
                className={styles.groupChild2}
                alt=""
                src="/vector-138.svg"
              />
              <div className={styles.rectangleDiv} />
              <img
                className={styles.groupChild3}
                alt=""
                src="/vector-136.svg"
              />
              <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
              <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
              <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
              <img className={styles.vectorIcon5} alt="" src="/vector5.svg" />
            </div>
            <img className={styles.groupChild4} alt="" src="/vector-134.svg" />
            <img className={styles.groupChild5} alt="" src="/vector-135.svg" />
          </div>
          <img className={styles.groupChild6} alt="" src="/vector-139.svg" />
        </div>
        <img className={styles.artworkIcon} alt="" src="/artwork@2x.png" />
      </div>
    </div>
  );
};

export default Frame;
