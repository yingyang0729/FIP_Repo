export default {
    name: "UserTypingCompont",

    template: `

    <div>
    <div class="typing">{{typist}}</div>
    <!-- other chat components -->
  </div>
    `,

    data() {
        return {
            typing: "",
            message: "",
            typing: false,
            typist: "",
        };
    },
};
