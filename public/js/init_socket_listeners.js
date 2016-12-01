var networkLogger = require('./shared_instances/network_logger');
var addNicknameActions = require('./listeners_actions/nickname');
var addGameSelectionActions = require('./listeners_actions/game_selection');
var addGameStatesUpdate = require('./listeners_actions/game_update_states');
var addGameInputActions = require('./listeners_actions/game_input');
var addNicknameLogs = require('./listeners_reports/nickname');
var addUsersLogs = require('./listeners_reports/users');
var addOwnClientLogs = require('./listeners_reports/own_client');
var addGameSelectionLogs = require('./listeners_reports/game_selection');


module.exports = function (socket) {
    // actions
    addNicknameActions(socket);
    addGameSelectionActions(socket);
    addGameInputActions(socket);
    addGameStatesUpdate(socket);

    // logs
    addNicknameLogs(socket, networkLogger);
    addGameSelectionLogs(socket, networkLogger);
    addUsersLogs(socket, networkLogger);
    addOwnClientLogs(socket, networkLogger);
};