// Mock implementation of react-hot-toast for testing
const toast = {
  success: jest.fn(),
  error: jest.fn(),
  loading: jest.fn(),
  dismiss: jest.fn(),
  custom: jest.fn(),
  promise: jest.fn(),
  remove: jest.fn(),
};

const Toaster = () => null;

module.exports = {
  toast,
  Toaster,
  default: toast
};