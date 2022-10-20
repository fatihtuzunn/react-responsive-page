export default function ContactForum() {
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <form>
                            <input type="email" className="form-control" placeholder="Email"></input>

                            <textarea class="form-control mt-2" aria-label="With textarea"></textarea>
                            <button className="btn btn-primary mt-2"> Submit</button>
                        </form>

                    </div>
                    <div className="col"></div>

                </div>
            </div>
        </>
    )
}