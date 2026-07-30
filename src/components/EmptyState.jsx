function EmptyState({icon : Icon, title, message}){
    return(
        <div className="empty-container">
            <Icon className="empty-icon" />

            <h2>{title}</h2>

            <p>{message}</p>

        </div>
    )
}
export default EmptyState