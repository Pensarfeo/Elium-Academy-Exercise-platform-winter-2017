#### Style translator

Continue the previous exercise by styling it so that folllows this API. Give a minimum styling to your app using bootstrap. 

API:

Method  | URL                                 | Action                    | response                                                                                            |
------- | ----------------------------------  | ---------                 | ---------------------                                                                               |
Get     | /messages/                          | Index                     | Show All messages in english                                                                        |
Get     | /messages/new                       | New message Form          | Send a form with action="/messages" and method="POST" and one input field                           |
Post    | /messages                           | Create New message        | None Redirect to  /:message/EN                                                                      |
Post    | /messages/:content/delete           | Delete Message            | None Redirect to /messages                                                                          |

Get     | /:message/:lang                     | show translation          | :message is :translation in :lang                                                                   |

Get     | /:message/:lang/                    | Send add translation Form | Send a form with action="/:message/:lang" and method="POST" and one input field                     |
Post    | /:message/:lang/                    | add translation           | None redirect to /:message                                                                          |

Get     | /:message/delete/:lang              | delete translation        | Send a form with action="/:message/delete/:lang" and method="POST" and one input field              |
Post    | /:message/delete/:lang              | delete translation        | None redirect to /:message                                                                          |

Get     | /:message/update/:lang/:translation | update translation        | Send a form with action="/:message/delete/:lang/:translation" and method="POST" and one input field |
Post    | /:message/update/:lang/:translation | update translation        | None redirect to /:message                                                                          |
