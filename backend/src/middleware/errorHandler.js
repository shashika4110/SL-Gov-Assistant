export const errorHandler = (err, _req, res, _next) => {
  console.error('[Error]', err.message);

  const status = err.statusCode || 500;
  res.status(status).json({
    success: false,
    message: err.message || 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

export class AppError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const notFound = (_req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
};
