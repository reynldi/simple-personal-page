import { useState } from 'react'
import { Checkbox, FormControlLabel } from "@material-ui/core";
import styles from '../styles/_styles.module.scss'

export default function MainContent(){
    const [showBioDescription, setShowBioDescription] = useState(false);

    const onBioClick = () => {
        setShowBioDescription(true)
    }

    return(
       <div>
           <div className={styles.contentIllustration} hidden={showBioDescription}>
               <img className={styles.img} src={"image/reynaldi-img-illustration.png"}/>
           </div>
           <div className={styles.content} hidden={showBioDescription}>
               <div className={styles.intro}>
                   <p className={styles.introText1}>Hi, I'm Reynaldi</p>
                   <p className={styles.introText2}>Software Engineer</p>
               </div>
               <div className={styles.biographySection}>
                   <div className={styles.checkedLabel}>
                       <FormControlLabel
                           value="start"
                           control={<Checkbox color="default"/>}
                           label="See Who I Am"
                           labelPlacement="start"
                           onChange={() => onBioClick()}
                       />
                   </div>
                   <div className={styles.checkedLabel}>
                       <FormControlLabel
                           value="start"
                           control={<Checkbox color="default" />}
                           label="Work Experience"
                           labelPlacement="start"
                       />
                   </div>
                   <div className={styles.checkedLabel}>
                       <FormControlLabel
                           value="start"
                           control={<Checkbox color="default" />}
                           label="Skill Expertise"
                           labelPlacement="start"
                       />
                   </div>
                   <div className={styles.checkedLabel}>
                       <FormControlLabel
                           value="start"
                           control={<Checkbox color="default" />}
                           label="Interest and Hobbies"
                           labelPlacement="start"
                       />
                   </div>
               </div>
           </div>
       </div>
    )
}