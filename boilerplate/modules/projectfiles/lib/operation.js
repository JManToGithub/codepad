/*jshint esnext: true */

module.exports = function(socket, revision) {

    var filepath = socket.projectfile;
    var username = socket.handshake.session.username;

    if (!filepath) return;
    if (!ß.projectfiles[filepath]) return;

    ß.lib.projectfiles.oplog(username, 'edit', socket.projectfile);

    if (!ß.projectfiles[filepath].at) ß.projectfiles[filepath].at = {};
    if (!ß.projectfiles[filepath].at[username]) ß.projectfiles[filepath].at[username] = {};

    ß.projectfiles[filepath].at[username][socket.id] = revision;

    ß.lib.filetree.send_files();

};
