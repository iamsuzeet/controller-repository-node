class NotFoundException extends Error {
  status: number;
  data: any;
  constructor(message?: string) {
    super('Not found');
    this.message = message || 'Route not found';
    this.status = 404;
    this.stack = null;
  }
}

export default NotFoundException;
