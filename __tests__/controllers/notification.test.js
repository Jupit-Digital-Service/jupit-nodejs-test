const { SignupNotificationController } = require("../../controllers/SignupNotificationController");

const request = {
    body: {
        name: 'Emmanuel',
        email: 'author@gmail.com'
    },
};

const response = {
    status: jest.fn((x) => x),
    json: jest.fn((x) => x),
}

it('should send welcome email when user registers', async () => {
    await SignupNotificationController(request, response);
    expect(response.status).toHaveBeenCalledWith(404);
});