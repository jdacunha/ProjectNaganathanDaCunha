
function Login() {
    function handleClick() {
        alert('le lien a été cliqué');
    }

    return (
        <button onClick={handleClick} id="buttontest">

            Button Test
        </button>
    );
}

export default Login;