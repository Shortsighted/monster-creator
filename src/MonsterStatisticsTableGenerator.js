function MonsterStatisticsTableGenerator() {
    const monsterStatisticsTableContent = [
        {CR: "0", XP: "10", profBonus: "2", AC: "13", minHP: "1", maxHP: "6", attackBonus: "3", minDamage: "0", maxDamage: "1", DC: "13"},
        {CR: "1/8", XP: "25", profBonus: "2", AC: "13", minHP: "7", maxHP: "35", attackBonus: "3", minDamage: "2", maxDamage: "3", DC: "13"},
        {CR: "1/4", XP: "50", profBonus: "2", AC: "13", minHP: "36", maxHP: "49", attackBonus: "3", minDamage: "4", maxDamage: "5", DC: "13"},
        {CR: "1/2", XP: "100", profBonus: "2", AC: "13", minHP: "50", maxHP: "70", attackBonus: "3", minDamage: "6", maxDamage: "8", DC: "13"},
        {CR: "1", XP: "200", profBonus: "2", AC: "13", minHP: "71", maxHP: "85", attackBonus: "3", minDamage: "9", maxDamage: "14", DC: "13"},
        {CR: "2", XP: "450", profBonus: "2", AC: "13", minHP: "86", maxHP: "100", attackBonus: "3", minDamage: "15", maxDamage: "20", DC: "13"},
        {CR: "3", XP: "700", profBonus: "2", AC: "13", minHP: "101", maxHP: "115", attackBonus: "4", minDamage: "21", maxDamage: "26", DC: "13"},
        {CR: "4", XP: "1,100", profBonus: "2", AC: "14", minHP: "116", maxHP: "130", attackBonus: "5", minDamage: "27", maxDamage: "32", DC: "14"},
        {CR: "5", XP: "1,800", profBonus: "3", AC: "15", minHP: "131", maxHP: "145", attackBonus: "6", minDamage: "33", maxDamage: "38", DC: "15"},
        {CR: "6", XP: "2,300", profBonus: "3", AC: "15", minHP: "146", maxHP: "160", attackBonus: "6", minDamage: "39", maxDamage: "44", DC: "15"},
        {CR: "7", XP: "2,900", profBonus: "3", AC: "15", minHP: "161", maxHP: "175", attackBonus: "6", minDamage: "45", maxDamage: "50", DC: "15"},
        {CR: "8", XP: "3,900", profBonus: "3", AC: "16", minHP: "176", maxHP: "190", attackBonus: "7", minDamage: "51", maxDamage: "56", DC: "16"},
        {CR: "9", XP: "5,000", profBonus: "4", AC: "16", minHP: "191", maxHP: "205", attackBonus: "7", minDamage: "57", maxDamage: "62", DC: "16"},
        {CR: "10", XP: "5,900",	profBonus: "4", AC: "17", minHP: "206", maxHP: "220", attackBonus: "7", minDamage: "63", maxDamage: "68", DC: "16"},
        {CR: "11", XP: "7,200",	profBonus: "4", AC: "17", minHP: "221", maxHP: "235", attackBonus: "8", minDamage: "69", maxDamage: "74", DC: "17"},
        {CR: "12", XP: "8,400",	profBonus: "4", AC: "17", minHP: "236", maxHP: "250", attackBonus: "8", minDamage: "75", maxDamage: "80", DC: "18"},
        {CR: "13", XP: "10,000", profBonus: "5", AC: "18", minHP: "251", maxHP: "265", attackBonus: "8", minDamage: "81", maxDamage: "86", DC: "18"},
        {CR: "14", XP: "11,500", profBonus: "5", AC: "18", minHP: "266", maxHP: "280", attackBonus: "8", minDamage: "87", maxDamage: "92", DC: "18"},
        {CR: "15", XP: "13,000", profBonus: "5", AC: "18", minHP: "281", maxHP: "295", attackBonus: "8", minDamage: "93", maxDamage: "98", DC: "18"},
        {CR: "16", XP: "15,000", profBonus: "5", AC: "18", minHP: "296", maxHP: "310", attackBonus: "9", minDamage: "99", maxDamage: "104", DC: "18"},
        {CR: "17", XP: "18,000", profBonus: "6", AC: "19", minHP: "311", maxHP: "325", attackBonus: "10", minDamage: "105", maxDamage: "110", DC: "19"},
        {CR: "18", XP: "20,000", profBonus: "6", AC: "19", minHP: "326", maxHP: "340", attackBonus: "10", minDamage: "111", maxDamage: "116", DC: "19"},
        {CR: "19", XP: "22,000", profBonus: "6", AC: "19", minHP: "341", maxHP: "355", attackBonus: "10", minDamage: "117", maxDamage: "122", DC: "19"},
        {CR: "20", XP: "25,000", profBonus: "6", AC: "19", minHP: "356", maxHP: "400", attackBonus: "10", minDamage: "123", maxDamage: "140", DC: "19"},
        {CR: "21", XP: "33,000", profBonus: "7", AC: "19", minHP: "401", maxHP: "445", attackBonus: "11", minDamage: "141", maxDamage: "158", DC: "20"},
        {CR: "22", XP: "41,000", profBonus: "7", AC: "19", minHP: "446", maxHP: "490", attackBonus: "11", minDamage: "159", maxDamage: "176", DC: "20"},
        {CR: "23", XP: "50,000", profBonus: "7", AC: "19", minHP: "491", maxHP: "535", attackBonus: "11", minDamage: "177", maxDamage: "194", DC: "20"},
        {CR: "24", XP: "62,000", profBonus: "7", AC: "19", minHP: "536", maxHP: "580", attackBonus: "11", minDamage: "195", maxDamage: "212", DC: "21"},
        {CR: "25", XP: "75,000", profBonus: "8", AC: "19", minHP: "581", maxHP: "625", attackBonus: "12", minDamage: "213", maxDamage: "230", DC: "21"},
        {CR: "26", XP: "90,000", profBonus: "8", AC: "19", minHP: "626", maxHP: "670", attackBonus: "12", minDamage: "231", maxDamage: "248", DC: "21"},
        {CR: "27", XP: "105,000", profBonus: "8", AC: "19", minHP: "671", maxHP: "715", attackBonus: "13", minDamage: "249", maxDamage: "266", DC: "22"},
        {CR: "28", XP: "120,000", profBonus: "8", AC: "19", minHP: "716", maxHP: "760", attackBonus: "13", minDamage: "267", maxDamage: "284", DC: "22"},
        {CR: "29", XP: "135,000", profBonus: "9", AC: "19", minHP: "760", maxHP: "805", attackBonus: "13", minDamage: "285", maxDamage: "302", DC: "22"},
        {CR: "30", XP: "155,000", profBonus: "9", AC: "19", minHP: "805", maxHP: "850", attackBonus: "14", minDamage: "303", maxDamage: "320", DC: "23"}        
    ]

    return (
        <table>
            <thead>
                <tr>
                    <th>CR</th>
                    <th>Prof.<br/>Bonus</th>
                    <th>Armor<br/>Class</th>
                    <th>Hit<br/>Points</th>
                    <th>Attack<br/>Bonus</th>
                    <th>Damage/<br/>Round</th>
                    <th>Save<br/>DC</th>
                </tr>
            </thead>
            <tbody>
                {monsterStatisticsTableContent.map((row, index) => (
                    <tr key={index}>
                        <td>{row.CR}</td>
                        <td>{row.profBonus}</td>
                        <td>{row.AC}</td>
                        <td>{row.minHP}-{row.maxHP}</td>
                        <td>{row.attackBonus}</td>
                        <td>{row.minDamage}-{row.maxDamage}</td>
                        <td>{row.DC}</td>
                    </tr>
                ))}
            </tbody>
        </table>        
    )
}

export default MonsterStatisticsTableGenerator