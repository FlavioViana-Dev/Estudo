export default data=>(
    `
        <ul>
            ${data.map(people=>`<li>${people.name} - ${people.age}</li>`).join('')}
        </ul>
    `
)