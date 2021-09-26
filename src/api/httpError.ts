import { AxiosResponse } from "axios";

export type ErrorDetails = {
  what: string;
  who: string;
};

export type ErrorHandler = {
  badRequest: (errorDetails: ErrorDetails) => void;
  pageNotFound: (errorDetails: ErrorDetails) => void;
  unauthenticated: (errorDetails: ErrorDetails) => void;
  permissionDenied: (errorDetails: ErrorDetails) => void;
  serverError: (errorDetails: ErrorDetails) => void;
  unknownError: (errorDetails: ErrorDetails) => void;
}

export const handleAPIError = (
  errorHandler: ErrorHandler,
  response: AxiosResponse
) => {
  switch (response.status) {
    case 400:
      errorHandler.badRequest(response.data.error as ErrorDetails)
      break;
    case 404:
      errorHandler.pageNotFound(response.data.error as ErrorDetails);
      break;
    case 401: {
      errorHandler.pageNotFound(response.data.error as ErrorDetails);
      break;
    }
    case 403:
      errorHandler.pageNotFound(response.data.error as ErrorDetails);
      break;
    case 500:
      errorHandler.pageNotFound(response.data.error as ErrorDetails);
      break;
    default:
      errorHandler.unknownError(response.data.error as ErrorDetails)
      break;
  }
}