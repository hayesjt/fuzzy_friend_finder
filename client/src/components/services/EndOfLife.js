import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import './css/services.css'

export const EndOfLife = () => (
    <div>
        <Card className="bg-dark text-white">
  <Card.Img src="https://s3.amazonaws.com/petcentral.com/wp-content/uploads/2015/05/08165949/old-dog-pain-relief.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title id="end">End of Life Services</Card.Title>
    <Card.Text id="end-text">
      What to do when your pet passes away
    </Card.Text>
    <Card.Text>Resources for every pet owner</Card.Text>
  </Card.ImgOverlay>
</Card>
<CardDeck>
  <Card>
    <Card.Img id="dog-img" variant="top" src="https://media1.s-nbcnews.com/i/newscms/2019_26/1452846/old-dog-today-main-190625_f5d00385fdc328d1ac98ac057e00b1fe.jpg" fluid/>
    <Card.Body>
      <Card.Title>Is Your Pet In Pain?</Card.Title>
      <Card.Text>
      When cats and dogs are suffering, they may not show outward signs that we normally associate with pain like whimpering or crying. Sometimes an animal will continue to eat or drink in spite of pain or disorientation. Some physiological and behavioral signs that your pet might be experiencing pain include excessive panting or gasping for breath, reclusiveness, reluctance to move and food pickiness.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img id="cat-img" variant="top" src="https://www.companioncare.co.uk/globalassets/close-up-of-cat-looking-up.jpg?w=585&scale=down"/>
    <Card.Body>
      <Card.Title>Pet Hospice Care</Card.Title>
      <Card.Text>
      Pet hospice care, also known as palliative care, is an option if your pet is suffering from a terminal illness and a cure is not possible. The goal is to make a pet’s final days or weeks more pleasant with the proper use of pain medications, dietary strategies and human interaction. Pet hospice is not a place, but a personal choice and philosophy based on the principle that death is a part of life and can be dignified. When considering hospice care, pet parents should very careful not to prolong the suffering of pets who are in pain or experiencing poor quality of life.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img id="urn-img" variant="top" src="https://cdn.shopify.com/s/files/1/0039/0781/3465/files/SkyUrns-08821-test_4e7986b1-561c-47f5-b3b6-4eee4681c704_300x.jpg?v=1549731156"/>
    <Card.Body>
      <Card.Title>Pet Cremation and Burial</Card.Title>
      <Card.Text>
      It is very common for pet owners to have their deceased pets cremated. You need to decide if you wish to keep your pet's ashes as a remembrance. If so, you will want to arrange an individual (or private) cremation, meaning that your pet will be cremated alone. Businesses that offer individual cremation commonly offer home pick-up/delivery of remains as part of their service packages.
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
<Card>
    <Card.Img variant="top" src="https://agapepetservices.com/wp-content/uploads/2015/12/2_symptom-grief.jpg" />
    <Card.Body>
      <Card.Text>
        <h3>Dealing with Pet Loss</h3>
      There are many forms of grief that are completely normal in the wake of the loss of a beloved pet. It can help to memorialize your pet in a way that includes others who cared about him or her. Friends and family can help form a support network. If severe symptoms of grief persist, it is best to consult with your doctor about your feelings and ways to cope with this loss.
      </Card.Text>
    </Card.Body>
  </Card>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
    </div>
    )
