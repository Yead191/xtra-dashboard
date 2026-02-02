import { useState } from 'react';
import { ClientRoute } from '../ClientApp';
import { ArrowLeft, Calendar as CalendarIcon, Clock, MapPin, CreditCard, Check } from 'lucide-react';

interface ClientBookingFlowProps {
  navigate: (route: ClientRoute, params?: any) => void;
  currentUser: any;
  serviceId: string;
}

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
];

const dates = [
  { day: 'Mon', date: 15, available: true },
  { day: 'Tue', date: 16, available: true },
  { day: 'Wed', date: 17, available: false },
  { day: 'Thu', date: 18, available: true },
  { day: 'Fri', date: 19, available: true },
  { day: 'Sat', date: 20, available: true },
  { day: 'Sun', date: 21, available: true },
];

export function ClientBookingFlow({ navigate, currentUser, serviceId }: ClientBookingFlowProps) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const serviceName = 'Professional House Cleaning';
  const servicePrice = 49;

  const handleConfirmBooking = () => {
    setBookingConfirmed(true);
    setTimeout(() => {
      navigate('order-tracking', { orderId: 'ORD-001' });
    }, 2000);
  };

  if (bookingConfirmed) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-2xl mb-2">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">Your service has been booked successfully</p>
          <div className="animate-pulse text-blue-600">Redirecting to order details...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-6 pt-12 pb-4">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => step > 1 ? setStep(step - 1) : navigate('service-details', { serviceId })}
            className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-xl">Book Service</h2>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2">
          <div className={`flex-1 h-1 rounded-full ${step >= 1 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
          <div className={`flex-1 h-1 rounded-full ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
          <div className={`flex-1 h-1 rounded-full ${step >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {step === 1 && (
          <div>
            <h3 className="text-lg mb-6">Select Date & Time</h3>
            
            {/* Date Selection */}
            <div className="mb-6">
              <p className="text-gray-600 mb-3">Choose a date</p>
              <div className="grid grid-cols-7 gap-2">
                {dates.map((d) => (
                  <button
                    key={d.date}
                    onClick={() => d.available && setSelectedDate(d.date)}
                    disabled={!d.available}
                    className={`flex flex-col items-center p-3 rounded-xl transition-all ${
                      selectedDate === d.date
                        ? 'bg-blue-600 text-white'
                        : d.available
                        ? 'bg-gray-50 hover:bg-gray-100'
                        : 'bg-gray-50 opacity-40 cursor-not-allowed'
                    }`}
                  >
                    <span className="text-xs mb-1">{d.day}</span>
                    <span className="text-lg">{d.date}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            {selectedDate && (
              <div>
                <p className="text-gray-600 mb-3">Choose a time</p>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 rounded-xl transition-all ${
                        selectedTime === time
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-lg mb-6">Service Location</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Address</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your address"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Additional Notes (Optional)</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any special instructions or requirements..."
                  rows={4}
                  className="w-full px-4 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                />
              </div>

              {/* Booking Summary */}
              <div className="bg-blue-50 rounded-2xl p-4 mt-6">
                <p className="text-sm text-gray-600 mb-2">Booking Summary</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-900">
                    <CalendarIcon className="w-4 h-4 text-blue-600" />
                    <span>Dec {selectedDate}, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-900">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>{selectedTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="text-lg mb-6">Payment Method</h3>
            
            {/* Payment Options */}
            <div className="space-y-3 mb-6">
              <button
                onClick={() => setPaymentMethod('card')}
                className={`w-full p-4 rounded-2xl border-2 transition-all ${
                  paymentMethod === 'card'
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-gray-900">Credit/Debit Card</p>
                      <p className="text-sm text-gray-500">Pay securely with card</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 ${
                    paymentMethod === 'card' ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                  } flex items-center justify-center`}>
                    {paymentMethod === 'card' && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                </div>
              </button>

              <button
                onClick={() => setPaymentMethod('cash')}
                className={`w-full p-4 rounded-2xl border-2 transition-all ${
                  paymentMethod === 'cash'
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">💵</span>
                    </div>
                    <div className="text-left">
                      <p className="text-gray-900">Cash on Delivery</p>
                      <p className="text-sm text-gray-500">Pay after service completion</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 ${
                    paymentMethod === 'cash' ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                  } flex items-center justify-center`}>
                    {paymentMethod === 'cash' && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                </div>
              </button>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="mb-4">Order Summary</h4>
              <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
                <div className="flex justify-between">
                  <span className="text-gray-600">Service</span>
                  <span className="text-gray-900">{serviceName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date</span>
                  <span className="text-gray-900">Dec {selectedDate}, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time</span>
                  <span className="text-gray-900">{selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Service Fee</span>
                  <span className="text-gray-900">${servicePrice}.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (10%)</span>
                  <span className="text-gray-900">${(servicePrice * 0.1).toFixed(2)}</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-lg">Total</span>
                <span className="text-2xl text-blue-600">${(servicePrice * 1.1).toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Action */}
      <div className="bg-white border-t border-gray-100 p-6 safe-area-bottom">
        {step < 3 ? (
          <button
            onClick={() => setStep(step + 1)}
            disabled={step === 1 && (!selectedDate || !selectedTime)}
            className="w-full bg-blue-600 text-white py-4 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        ) : (
          <button
            onClick={handleConfirmBooking}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl shadow-lg"
          >
            Confirm Booking
          </button>
        )}
      </div>
    </div>
  );
}
