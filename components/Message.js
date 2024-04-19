import React from "react";

const HolidayMessage = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based index

  // Function to generate holiday message based on current month
  const generateHolidayMessage = (month) => {
    switch (month) {
      case 1: // January
        return "New Year, New Savings!";
      case 2: // February
        return "Valentine's Day Sale - Find the Perfect Gift!";
      case 3: // March
        return "Spring into Savings!";
      case 4: // April
        return "Spring Cleaning Sale - Refresh Your Home!";
      case 5: // May
        return "Mother's Day Special - Show Your Love!";
      case 6: // June
        return "Father's Day Sale - Find Something Perfect for Dad!";
      case 7: // July
        return "Summer Savings Event - Don't Miss Out!";
      case 8: // August
        return "Back to School Sale - Gear Up for Success!";
      case 9: // September
        return "Fall into Savings - Cozy Up Your Home!";
      case 10: // October
        return "Halloween Spooktacular - Scarily Good Deals!";
      case 11: // November
        return "Thanksgiving Sale - Feast on Savings!";
      case 12: // December
        return "Get Ready for Christmas Savings!";
      default:
        return "Seasonal Sale - Find Amazing Deals!";
    }
  };

  // Get the holiday message for the current month
  const holidayMessage = generateHolidayMessage(currentMonth);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{holidayMessage}</h2>
    </div>
  );
};

export default HolidayMessage;
