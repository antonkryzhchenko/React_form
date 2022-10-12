const Notification = (props) => {
    const {firstName, secondName} = props;
    return(
        <>
        <h2>{firstName} {secondName}, спасибо за регистрацию!</h2>
        </>
    )
}
export default Notification;