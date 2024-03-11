import React, { useState } from 'react';

// Defines the UserProfile component
function UserProfile() {
  // Initializes state for the user's profile information
  const [userProfile, setUserProfile] = useState({
    name: 'Janneth Hann',
    email: 'jann@hann.com',
    address: {
      street: '408C 125th pl sw',
      city: 'Seattle',
      state: 'WA',
      zip_code: '98123',
      country: 'United States'
    }
  });

  // Initializes state for each address input field
  const [inputStreet, setInputStreet] = useState(userProfile.address.street);
  const [inputCity, setInputCity] = useState(userProfile.address.city);
  const [inputState, setInputState] = useState(userProfile.address.state);
  const [inputZipCode, setInputZipCode] = useState(userProfile.address.zip_code);
  const [inputCountry, setInputCountry] = useState(userProfile.address.country);

  // Function to update the userProfile state with new address
  const updateAddress = () => {
    setUserProfile(prevState => ({
      ...prevState,
      address: {
        street: inputStreet,
        city: inputCity,
        state: inputState,
        zip_code: inputZipCode,
        country: inputCountry
      }
    }));
  };

  // Renders the component's UI
  return (
    <div>
      {/* Street input field */}
      <label htmlFor="street">Street:</label>
      <input
        id="street"
        placeholder="Street"
        value={inputStreet}
        onChange={e => setInputStreet(e.target.value)}
      />

      {/* City input field */}
      <label htmlFor="city">City:</label>
      <input
        id="city"
        placeholder="City"
        value={inputCity}
        onChange={e => setInputCity(e.target.value)}
      />

      {/* State input field */}
      <label htmlFor="state">State:</label>
      <input
        id="state"
        placeholder="State"
        value={inputState}
        onChange={e => setInputState(e.target.value)}
      />

      {/* Zip Code input field */}
      <label htmlFor="zip_code">Zip Code:</label>
      <input
        id="zip_code"
        placeholder="Zip Code"
        value={inputZipCode}
        onChange={e => setInputZipCode(e.target.value)}
      />

      {/* Country input field */}
      <label htmlFor="country">Country:</label>
      <input
        id="country"
        placeholder="Country"
        value={inputCountry}
        onChange={e => setInputCountry(e.target.value)}
      />

      {/* Button to trigger address update */}
      <button onClick={updateAddress}>Update Address</button>

      {/* Displays the user's profile information */}
      <div>
        <p>Name: {userProfile.name}</p>
        <p>Email: {userProfile.email}</p>
        <p>Address:</p>
        <p>{`${userProfile.address.street}, ${userProfile.address.city}, ${userProfile.address.state} ${userProfile.address.zip_code}, ${userProfile.address.country}`}</p>
      </div>
    </div>
  );
}

export default UserProfile;
