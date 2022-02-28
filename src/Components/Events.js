import '../App.css'
import Card from 'react-bootstrap/Card'
import '../Css/Events.css'

{
  /*this event object takes the artist and events object */
}

const Events = ({ eventsinfo }) => {
  return (
    <div className='eventsBackground'>
      <h1 data-testid='heading'>Artists</h1>

      {eventsinfo.map((item) => (
        <span key={eventsinfo['_id']}>
          <Card>
            <Card.Title>Artist Info</Card.Title>

            <Card.Body>
              <Card.Text>
                Name:
                {item['firstName']} <br />
                Gender: {item['gender']}
                <br /> Height in Cm:{item['HeightId']}
              </Card.Text>
            </Card.Body>
          </Card>
        </span>
      ))}
    </div>
  )
}

export default Events
