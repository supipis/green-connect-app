import React from 'react'

interface Props {}

function ListingCard(props: Props) {
    const {} = props

    return (
        <>
        <div>
            <img src="src/assets/tomato.png" alt="" />
            <h1>Tomato</h1>
            <div>
            <div>
                <p>Catagory</p>
                <h3>Plant</h3>
            </div>
            <div>
                <p>Location</p>
                <h3>Solna</h3>
            </div>
            </div>
            <div>
            <p>Qty</p>
            <h3>3</h3>
            </div>

        </div>
        </>
    )
}

export default ListingCard
