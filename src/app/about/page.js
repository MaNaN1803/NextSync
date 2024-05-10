
async function timeout(){
    await new Promise(resolve => setTimeout(resolve, 5000));

}

export default async function about() {
    await timeout();
    // throw new error("rfbrfjbjrfbj");
    return (
        <div>
            <h1>About</h1>
            <p>This is the about page</p>
        </div>
    )
    
}