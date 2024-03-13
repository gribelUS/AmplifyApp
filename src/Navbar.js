
function Navbar() {
    return (
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">Amplify App</a>
        </div>
        <ul class="nav navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home</a>
                </li>
            <li class="nav-item active">
                <a class="nav-link" href="#">Page 1</a>
                </li>
            <li class="nav-item active">
                <a class="nav-link" href="#">Page 2</a>
                </li>
            <li class="nav-item active">
                <a class="nav-link" href="#">Page 3</a>
                </li>
        </ul>
        <form class="navbar-form navbar-left" action="/action_page.php">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Search"></input>
            </div>
            <button type="submit" class="btn btn-outline-success my-2 my-sm-0">Submit</button>
        </form>
    </div>
</nav>
    );
}

export default Navbar;