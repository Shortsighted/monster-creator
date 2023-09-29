import styles from "./MonsterEditor.module.css"

function MonsterEditor(props) {
    const createCRList = () => {
        const CR = ["0", "1/8", "1/4", "1/2"]
        for (let i = 1; i <= 30; i++) {
            CR.push(i.toString())
        }

        return CR
    }

    const createECRBlocks = () => {
        const ECR = createCRList()
        const ECRBlocks = ECR.map(item => (
            <option key={item} value={item}>
                {item}
            </option>
        ))
    
        return ECRBlocks
    }
    
    const ECRBlocks = createECRBlocks()

    return(
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <div className={styles.firstSection}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="size">Size</label>
                    <select name="size">
                        <option value="">---</option>
                        <option value="tiny">Tiny</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="huge">Huge</option>
                        <option value="gargantuan">Gargantuan</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="type">Type</label>
                    <select name="type">
                        <option value="">---</option>
                        <option value="aberration">aberration</option>
                        <option value="beast">beast</option>
                        <option value="celestial">celestial</option>
                        <option value="construct">construct</option>
                        <option value="dragon">dragon</option>
                        <option value="elemental">elemental</option>
                        <option value="fey">fey</option>
                        <option value="fiend">fiend</option>
                        <option value="giant">giant</option>
                        <option value="humanoid">humanoid</option>
                        <option value="monstrosity">monstrosity</option>
                        <option value="ooze">ooze</option>
                        <option value="plant">plant</option>
                        <option value="undead">undead</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="alignment">Alignment</label>
                    <select name="alignment">
                        <option value="">---</option>
                        <option value="unaligned">unaligned</option>
                        <option value="lawful good">lawful good</option>
                        <option value="lawful neutral">lawful neutral</option>
                        <option value="lawful evil">lawful evil</option>
                        <option value="neutral good">neutral good</option>
                        <option value="neutral">neutral</option>
                        <option value="neutral evil">neutral evil</option>
                        <option value="chaotic good">chaotic good</option>
                        <option value="chaotic neutral">chaotic neutral</option>
                        <option value="chaotic evil">chaotic evil</option>
                    </select>
                </div>
            </div>
            <div className={styles.secondSection}>
                <label htmlFor="stats">Ability Scores</label>
                <div className={styles.abilityScores}>
                    <div>
                        <input type="number" name="strength" min={0} max={30} />
                        <label htmlFor="strength">STR</label>
                    </div>
                    <div>
                        <input type="number" name="dexterity" min={0} max={30}/>
                        <label htmlFor="dexterity">DEX</label>
                    </div>
                    <div>
                        <input type="number" name="constitution" min={0} max={30}/>
                        <label htmlFor="constitution">CON</label>
                    </div>
                    <div>
                        <input type="number" name="intelligence" min={0} max={30}/>
                        <label htmlFor="intelligence">INT</label>
                    </div>
                    <div>
                        <input type="number" name="wisdom" min={0} max={30}/>
                        <label htmlFor="wisdom">WIS</label>
                    </div>
                    <div>
                        <input type="number" name="charisma" min={0} max={30}/>
                        <label htmlFor="charisma">CHA</label>
                    </div>     
                </div>
            </div>
            <div className={styles.thirdSection}>
                <div>
                    <label htmlFor="expectedChallengeRating" 
                            title="Expected Challenge Rating">
                                ECR
                                <sup>(?)</sup>
                    </label>
                    <select name="expectedChallengeRating">
                        <option value="">---</option>
                        {ECRBlocks}
                    </select>
                </div>
                <div>
                    <label htmlFor="armorClass">AC</label>
                    <input type="number" name="armorClass" min={0} />
                </div>
                <div>
                    <label htmlFor="hitPoints">HP</label>
                    <input type="number" name="hitPoints" min={0}/>
                </div>
            </div>
            <div className={styles.buttonWrapper}>
                <button>Update</button>
            </div>
        </form>
    )
}

export default MonsterEditor