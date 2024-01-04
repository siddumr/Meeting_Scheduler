import React, { useState } from 'react';
import './Field.css';

function Field() {
  const [meetingCode, setMeetingCode] = useState('');

  const redirectToMeeting = () => {
    if (meetingCode.trim() !== '') {
      const googleMeetURL = `https://meet.google.com/${meetingCode}`;
      window.location.href = googleMeetURL;
    }
    // Handle empty meeting code case if needed
  };

  return (
    <form>
      <div className="input-group">
        <input
          type="text"
          className="input1"
          id="meetingCode"
          name="meetingCode"
          placeholder="Enter Code"
          autoComplete="off"
          value={meetingCode}
          onChange={(e) => setMeetingCode(e.target.value)}
        />
        <input
          className="button--submit"
          value="JOIN MEETING"
          type="button"
          onClick={redirectToMeeting}
        />
      </div>
    </form>
  );
}

export default Field;
