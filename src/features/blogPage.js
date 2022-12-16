/* eslint-disable no-undef */
export function blogPage() {
  $(function () {
    if ($('body').is('.blog-page')) {
      class Inserter {
        constructor() {
          // params
          this.element = document.querySelector('[data-insert="me"]')
          this.collection = document.querySelector('[data-insert="here"]')
          this.position = this.collection.getAttribute('data-where')
          this.attach(this.position)
        }
        attach(position) {
          if (position === 'first') {
            this.collection.insertBefore(
              this.element,
              this.collection.children[0]
            )
          } else if (position === 'last' || position === undefined) {
            this.collection.appendChild(this.element)
          } else if (position === 'center') {
            this.collection.insertBefore(
              this.element,
              this.collection.children[this.collection.children.length / 2]
            )
          } else {
            this.collection.insertBefore(
              this.element,
              this.collection.children[position]
            )
          }
        }
      }
      new Inserter()
    }
  })
}
