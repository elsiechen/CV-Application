export default function Report({general}) {
    return (
        <>
            <h1>{general.fullName}</h1>
            <div>
                {general.email}{general.phone}{general.address}
            </div>
        </>
    )
}