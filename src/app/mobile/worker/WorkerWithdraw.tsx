import { useState } from 'react';
import { WorkerRoute } from '../WorkerApp';
import { 
  ArrowLeft, DollarSign, CreditCard, Building2, 
  Smartphone, CheckCircle, AlertCircle, Info, Clock,
  ChevronRight, Shield, Zap
} from 'lucide-react';

interface WorkerWithdrawProps {
  navigate: (route: WorkerRoute) => void;
  currentUser: any;
}

type WithdrawStep = 'amount' | 'method' | 'confirm' | 'success';
type PaymentMethod = 'bank' | 'mobile' | 'card';

export function WorkerWithdraw({ navigate, currentUser }: WorkerWithdrawProps) {
  const [step, setStep] = useState<WithdrawStep>('amount');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);
  const [processing, setProcessing] = useState(false);

  const availableBalance = currentUser.walletBalance;
  const minWithdraw = 50;
  const maxWithdraw = 5000;
  const platformFee = 2.50; // Fixed fee
  const feePercentage = 2; // 2%

  const withdrawalAmount = parseFloat(amount) || 0;
  const calculatedFee = platformFee + (withdrawalAmount * feePercentage / 100);
  const totalDeduction = withdrawalAmount + calculatedFee;
  const youReceive = withdrawalAmount;

  const isValidAmount = withdrawalAmount >= minWithdraw && withdrawalAmount <= maxWithdraw && withdrawalAmount <= availableBalance;

  const handleQuickAmount = (value: number) => {
    setAmount(value.toString());
  };

  const handleContinue = () => {
    if (step === 'amount' && isValidAmount) {
      setStep('method');
    } else if (step === 'method' && paymentMethod) {
      setStep('confirm');
    }
  };

  const handleConfirm = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setStep('success');
    }, 2000);
  };

  const renderAmountStep = () => (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="bg-[#3164E6] px-6 pt-12 pb-8">
        <button 
          onClick={() => navigate('wallet')}
          className="mb-6 flex items-center gap-2 text-white"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-bold">Withdraw Funds</span>
        </button>

        <div className="text-center">
          <p className="text-blue-100 text-sm mb-1">Available Balance</p>
          <h2 className="text-4xl font-bold text-white mb-2">${availableBalance.toFixed(2)}</h2>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/20">
            <Clock className="w-3 h-3 text-blue-100" />
            <span className="text-xs text-blue-100">1 of 2 withdrawals used this month</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pt-6 pb-24 bg-gray-50">
        {/* Warning */}
        <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mb-6 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-gray-900 text-sm mb-1">Withdrawal Limits</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Min: ${minWithdraw} • Max: ${maxWithdraw} per transaction • 2 withdrawals per month
            </p>
          </div>
        </div>

        {/* Amount Input */}
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 mb-6">
          <label className="block text-sm font-bold text-gray-700 mb-3">Enter Amount</label>
          <div className="relative mb-6">
            <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full pl-12 pr-4 py-4 text-3xl font-bold text-gray-900 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#3164E6] transition-colors"
            />
          </div>

          {/* Quick Amounts */}
          <div className="grid grid-cols-3 gap-3">
            {[100, 250, 500].map((value) => (
              <button
                key={value}
                onClick={() => handleQuickAmount(value)}
                className="py-3 px-4 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-[#3164E6] rounded-xl text-sm font-bold text-gray-700 hover:text-[#3164E6] active:scale-95 transition-all"
              >
                ${value}
              </button>
            ))}
          </div>
        </div>

        {/* Fee Breakdown */}
        {withdrawalAmount > 0 && (
          <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-6">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Info className="w-4 h-4 text-blue-600" />
              Fee Breakdown
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Withdrawal Amount</span>
                <span className="font-bold text-gray-900">${withdrawalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Platform Fee</span>
                <span className="font-semibold text-gray-700">${platformFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Processing Fee ({feePercentage}%)</span>
                <span className="font-semibold text-gray-700">${(withdrawalAmount * feePercentage / 100).toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-3 flex justify-between">
                <span className="font-bold text-gray-900">Total Deduction</span>
                <span className="font-bold text-red-600">${totalDeduction.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-gray-900">You Receive</span>
                <span className="font-bold text-green-600 text-lg">${youReceive.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {amount && !isValidAmount && (
          <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-6 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div className="text-sm text-red-700">
              {withdrawalAmount < minWithdraw && `Minimum withdrawal is $${minWithdraw}`}
              {withdrawalAmount > maxWithdraw && `Maximum withdrawal is $${maxWithdraw}`}
              {withdrawalAmount > availableBalance && 'Insufficient balance'}
            </div>
          </div>
        )}
      </div>

      {/* Continue Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-200">
        <button
          onClick={handleContinue}
          disabled={!isValidAmount}
          className="w-full bg-[#3164E6] text-white py-4 rounded-2xl font-bold text-sm shadow-lg active:scale-95 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );

  const renderMethodStep = () => (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="bg-[#3164E6] px-6 pt-12 pb-8">
        <button 
          onClick={() => setStep('amount')}
          className="mb-6 flex items-center gap-2 text-white"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-bold">Select Payment Method</span>
        </button>

        <div className="text-center">
          <p className="text-blue-100 text-sm mb-1">Withdrawing</p>
          <h2 className="text-4xl font-bold text-white">${withdrawalAmount.toFixed(2)}</h2>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pt-6 pb-32 bg-gray-50">
        <h3 className="font-bold text-gray-900 mb-4">Choose how to receive your money</h3>

        <div className="space-y-4">
          {/* Bank Transfer */}
          <button
            onClick={() => setPaymentMethod('bank')}
            className={`w-full bg-white rounded-2xl border-2 p-5 flex items-center gap-4 active:scale-98 transition-all ${
              paymentMethod === 'bank' ? 'border-[#3164E6] shadow-lg' : 'border-gray-100'
            }`}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Building2 className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1 text-left">
              <h4 className="font-bold text-gray-900 mb-1">Bank Transfer</h4>
              <p className="text-xs text-gray-500">1-3 business days • No extra fee</p>
              <p className="text-xs text-green-600 font-semibold mt-1">Recommended</p>
            </div>
            {paymentMethod === 'bank' && (
              <CheckCircle className="w-6 h-6 text-[#3164E6]" />
            )}
          </button>

          {/* Mobile Money */}
          <button
            onClick={() => setPaymentMethod('mobile')}
            className={`w-full bg-white rounded-2xl border-2 p-5 flex items-center gap-4 active:scale-98 transition-all ${
              paymentMethod === 'mobile' ? 'border-[#3164E6] shadow-lg' : 'border-gray-100'
            }`}
          >
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1 text-left">
              <h4 className="font-bold text-gray-900 mb-1">Mobile Money</h4>
              <p className="text-xs text-gray-500">Instant transfer • +$1 fee</p>
              <div className="flex items-center gap-1 mt-1">
                <Zap className="w-3 h-3 text-orange-500" />
                <p className="text-xs text-orange-600 font-semibold">Fastest</p>
              </div>
            </div>
            {paymentMethod === 'mobile' && (
              <CheckCircle className="w-6 h-6 text-[#3164E6]" />
            )}
          </button>

          {/* Debit Card */}
          <button
            onClick={() => setPaymentMethod('card')}
            className={`w-full bg-white rounded-2xl border-2 p-5 flex items-center gap-4 active:scale-98 transition-all ${
              paymentMethod === 'card' ? 'border-[#3164E6] shadow-lg' : 'border-gray-100'
            }`}
          >
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex-1 text-left">
              <h4 className="font-bold text-gray-900 mb-1">Debit Card</h4>
              <p className="text-xs text-gray-500">30 minutes • +$2 fee</p>
            </div>
            {paymentMethod === 'card' && (
              <CheckCircle className="w-6 h-6 text-[#3164E6]" />
            )}
          </button>
        </div>

        {/* Saved Accounts */}
        {paymentMethod === 'bank' && (
          <div className="mt-6">
            <h4 className="font-bold text-gray-900 mb-3">Saved Accounts</h4>
            <div className="bg-white rounded-2xl border border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Chase Bank</p>
                    <p className="text-xs text-gray-500">****  3847</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        )}

        {/* Security Note */}
        <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3">
          <Shield className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-gray-900 text-sm mb-1">Secure & Encrypted</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Your payment information is encrypted and secure. We never store your full card details.
            </p>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-200">
        <button
          onClick={handleContinue}
          disabled={!paymentMethod}
          className="w-full bg-[#3164E6] text-white py-4 rounded-2xl font-bold text-sm shadow-lg active:scale-95 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue to Confirmation
        </button>
      </div>
    </div>
  );

  const renderConfirmStep = () => (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="bg-[#3164E6] px-6 pt-12 pb-8">
        <button 
          onClick={() => setStep('method')}
          className="mb-6 flex items-center gap-2 text-white"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-bold">Confirm Withdrawal</span>
        </button>

        <div className="text-center">
          <p className="text-blue-100 text-sm mb-1">You're withdrawing</p>
          <h2 className="text-5xl font-bold text-white">${youReceive.toFixed(2)}</h2>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pt-6 pb-32 bg-gray-50">
        {/* Summary Card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <h4 className="font-bold text-gray-900 mb-4">Transaction Summary</h4>
          
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-600">Payment Method</span>
              <div className="text-right">
                <p className="font-bold text-gray-900 text-sm">
                  {paymentMethod === 'bank' && 'Bank Transfer'}
                  {paymentMethod === 'mobile' && 'Mobile Money'}
                  {paymentMethod === 'card' && 'Debit Card'}
                </p>
                {paymentMethod === 'bank' && (
                  <p className="text-xs text-gray-500">Chase Bank **** 3847</p>
                )}
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Withdrawal Amount</span>
                <span className="font-bold text-gray-900">${withdrawalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Platform Fee</span>
                <span className="text-gray-700">-${calculatedFee.toFixed(2)}</span>
              </div>
              {paymentMethod === 'mobile' && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Mobile Money Fee</span>
                  <span className="text-gray-700">-$1.00</span>
                </div>
              )}
              {paymentMethod === 'card' && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Card Processing Fee</span>
                  <span className="text-gray-700">-$2.00</span>
                </div>
              )}
            </div>

            <div className="border-t-2 border-gray-200 pt-4 flex justify-between">
              <span className="font-bold text-gray-900">You Receive</span>
              <span className="font-bold text-green-600 text-xl">${youReceive.toFixed(2)}</span>
            </div>

            <div className="bg-blue-50 rounded-xl p-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600" />
              <p className="text-xs text-blue-900">
                {paymentMethod === 'bank' && 'Arrives in 1-3 business days'}
                {paymentMethod === 'mobile' && 'Arrives instantly'}
                {paymentMethod === 'card' && 'Arrives in ~30 minutes'}
              </p>
            </div>
          </div>
        </div>

        {/* New Balance */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100 p-6">
          <h4 className="text-sm text-gray-600 mb-2">New Balance After Withdrawal</h4>
          <p className="text-3xl font-bold text-gray-900">${(availableBalance - totalDeduction).toFixed(2)}</p>
        </div>
      </div>

      {/* Confirm Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-200">
        <button
          onClick={handleConfirm}
          disabled={processing}
          className="w-full bg-[#3164E6] text-white py-4 rounded-2xl font-bold text-sm shadow-lg active:scale-95 transition-transform disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {processing ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Processing...
            </>
          ) : (
            'Confirm Withdrawal'
          )}
        </button>
      </div>
    </div>
  );

  const renderSuccessStep = () => (
    <div className="flex-1 flex flex-col items-center justify-center px-6 bg-gradient-to-br from-blue-50 to-white">
      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
        <CheckCircle className="w-12 h-12 text-white" />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-2">Withdrawal Successful!</h2>
      <p className="text-gray-600 text-center mb-8">
        Your withdrawal request has been processed
      </p>

      <div className="bg-white rounded-2xl border border-gray-200 p-6 w-full mb-8 shadow-sm">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-600 mb-1">Amount</p>
          <p className="text-4xl font-bold text-green-600">${youReceive.toFixed(2)}</p>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Reference ID</span>
            <span className="font-bold text-gray-900">WD-{Date.now().toString().slice(-8)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Payment Method</span>
            <span className="font-semibold text-gray-900">
              {paymentMethod === 'bank' && 'Bank Transfer'}
              {paymentMethod === 'mobile' && 'Mobile Money'}
              {paymentMethod === 'card' && 'Debit Card'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Estimated Arrival</span>
            <span className="font-semibold text-gray-900">
              {paymentMethod === 'bank' && '1-3 business days'}
              {paymentMethod === 'mobile' && 'Instantly'}
              {paymentMethod === 'card' && '~30 minutes'}
            </span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="bg-blue-50 rounded-xl p-4 flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <p className="text-xs text-blue-900 leading-relaxed">
              You'll receive a notification once the money arrives in your account. Check your transaction history for details.
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={() => navigate('wallet')}
        className="w-full bg-[#3164E6] text-white py-4 rounded-2xl font-bold text-sm shadow-lg active:scale-95 transition-transform mb-3"
      >
        Back to Wallet
      </button>

      <button
        onClick={() => {
          setStep('amount');
          setAmount('');
          setPaymentMethod(null);
        }}
        className="w-full bg-white text-[#3164E6] border-2 border-[#3164E6] py-4 rounded-2xl font-bold text-sm active:scale-95 transition-transform"
      >
        Make Another Withdrawal
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {step === 'amount' && renderAmountStep()}
      {step === 'method' && renderMethodStep()}
      {step === 'confirm' && renderConfirmStep()}
      {step === 'success' && renderSuccessStep()}
    </div>
  );
}
