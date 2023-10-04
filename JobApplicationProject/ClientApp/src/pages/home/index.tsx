const Home = (props: { name: string }) => {
    return (
        <div>
            <h1>{props.name ? 'Hi ' + props.name : 'You are not logged in'}</h1>
        </div>
    )
}

export default Home
