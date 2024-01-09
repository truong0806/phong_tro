import moment from "moment";

const formatDate = (times) => {
    let day = times.getDay() === 0 ? 'Chủ nhật' : `Thứ ${times.getDay() + 1}`
    let date = `${times.getDate()}/${times.getMonth() + 1}/${times.getFullYear()}`
    let time = `${times.getHours()}:${times.getMinutes()}`
    return `${day}, ${time} ${date}`
}
const genarateDate = (days) => {
    let today = new Date()
    let expireDay = moment(today).add(days, 'd').toDate()
    return {
        today: formatDate(today),
        expireDay: formatDate(expireDay),
    }
}
export default genarateDate