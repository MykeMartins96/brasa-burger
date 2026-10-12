
"use strict";

// ========================================
// CONFIGURAÇÕES DA HAMBURGUERIA
// ========================================

const CONFIG = {
  nome: "Brasa Burger",
  whatsapp: "5511999999999"
};

// Substitua o número acima pelo WhatsApp real
// da hamburgueria, incluindo 55 + DDD + número.

// ========================================
// CARDÁPIO COMPLETO — 39 PRODUTOS
// ========================================

const produtos = [
  // 1. HAMBÚRGUERES

  {
    id: 1,
    nome: "Brasa Clássico",
    categoria: "burgers",
    preco: 29.90,
    descricao: "Pão brioche, carne 160g, cheddar, alface e molho especial.",
    emoji: "🍔",
    tag: "Mais pedido",
    cor: "gold"
  },
  {
    id: 2,
    nome: "Duplo Smash",
    categoria: "burgers",
    preco: 36.90,
    descricao: "Dois hambúrgueres smash, cheddar duplo e maionese da casa.",
    emoji: "🍔",
    tag: "Favorito",
    cor: "orange"
  },
  {
    id: 3,
    nome: "Bacon Fire",
    categoria: "burgers",
    preco: 39.90,
    descricao: "Hambúrguer 180g, bacon crocante, queijo e barbecue.",
    emoji: "🍔",
    tag: "Especial",
    cor: "red"
  },
  {
    id: 4,
    nome: "Cheddar Melt",
    categoria: "burgers",
    preco: 34.90,
    descricao: "Hambúrguer artesanal com cheddar cremoso e cebola caramelizada.",
    emoji: "🍔",
    tag: "Novo",
    cor: "gold"
  },
  {
    id: 5,
    nome: "Chicken Crispy",
    categoria: "burgers",
    preco: 32.90,
    descricao: "Hambúrguer de frango crocante, alface, picles e maionese temperada.",
    emoji: "🍔",
    tag: "Crocante",
    cor: "orange"
  },
  {
    id: 6,
    nome: "Veggie Brasa",
    categoria: "burgers",
    preco: 33.90,
    descricao: "Hambúrguer vegetal, tomate, alface e molho especial.",
    emoji: "🍔",
    tag: "Vegetariano",
    cor: "gold"
  },
  {
    id: 7,
    nome: "Brasa BBQ",
    categoria: "burgers",
    preco: 42.90,
    descricao: "Hambúrguer 180g, bacon, queijo prato e barbecue.",
    emoji: "🍔",
    tag: "Premium",
    cor: "red"
  },
  {
    id: 8,
    nome: "Triplo Smash",
    categoria: "burgers",
    preco: 45.90,
    descricao: "Três carnes smash, cheddar e molho da casa.",
    emoji: "🍔",
    tag: "Gigante",
    cor: "orange"
  },
  {
    id: 9,
    nome: "Brasa Picante",
    categoria: "burgers",
    preco: 38.90,
    descricao: "Hambúrguer 160g, jalapeño, cheddar e maionese apimentada.",
    emoji: "🍔",
    tag: "Picante",
    cor: "red"
  },

  // 2. COMBOS

  {
    id: 10,
    nome: "Combo Brasa",
    categoria: "combos",
    preco: 47.90,
    descricao: "Brasa Clássico, batata individual e refrigerante lata.",
    emoji: "🍔🍟🥤",
    tag: "Combo",
    cor: "gold"
  },
  {
    id: 11,
    nome: "Combo Duplo",
    categoria: "combos",
    preco: 54.90,
    descricao: "Duplo Smash, batata individual e refrigerante lata.",
    emoji: "🍔🍟🥤",
    tag: "Combo",
    cor: "orange"
  },
  {
    id: 12,
    nome: "Combo Chicken",
    categoria: "combos",
    preco: 44.90,
    descricao: "Chicken Crispy, batata individual e refrigerante lata.",
    emoji: "🍔🍟🥤",
    tag: "Combo",
    cor: "gold"
  },
  {
    id: 13,
    nome: "Combo Família",
    categoria: "combos",
    preco: 119.90,
    descricao: "Dois Brasa Clássico, duas batatas e dois refrigerantes.",
    emoji: "🍔🍟🥤",
    tag: "Família",
    cor: "orange"
  },
  {
    id: 14,
    nome: "Combo Veggie",
    categoria: "combos",
    preco: 45.90,
    descricao: "Veggie Brasa, batata individual e refrigerante lata.",
    emoji: "🍔🍟🥤",
    tag: "Combo",
    cor: "gold"
  },

  // 3. ACOMPANHAMENTOS

  {
    id: 15,
    nome: "Batata Crocante",
    categoria: "acompanhamentos",
    preco: 17.90,
    descricao: "Batatas douradas, sequinhas e crocantes.",
    emoji: "🍟",
    tag: "Crocante",
    cor: "gold"
  },
  {
    id: 16,
    nome: "Onion Rings",
    categoria: "acompanhamentos",
    preco: 19.90,
    descricao: "Anéis de cebola empanados com molho especial.",
    emoji: "🧅",
    tag: "Especial",
    cor: "orange"
  },
  {
    id: 17,
    nome: "Batata Cheddar e Bacon",
    categoria: "acompanhamentos",
    preco: 25.90,
    descricao: "Batatas crocantes com cheddar cremoso e bacon.",
    emoji: "🍟",
    tag: "Mais pedido",
    cor: "orange"
  },
  {
    id: 18,
    nome: "Nuggets de Frango",
    categoria: "acompanhamentos",
    preco: 21.90,
    descricao: "Nuggets crocantes acompanhados de molho.",
    emoji: "🍗",
    tag: "Porção",
    cor: "gold"
  },
  {
    id: 19,
    nome: "Mozzarella Sticks",
    categoria: "acompanhamentos",
    preco: 24.90,
    descricao: "Palitos de queijo empanados e crocantes.",
    emoji: "🧀",
    tag: "Especial",
    cor: "orange"
  },

  // 4. BEBIDAS — REFRIGERANTES

  {
    id: 20,
    nome: "Coca-Cola Lata 350ml",
    categoria: "bebidas",
    preco: 7.90,
    descricao: "Coca-Cola original, lata de 350ml.",
    emoji: "🥤",
    tag: "Geladinho",
    cor: "red"
  },
  {
    id: 21,
    nome: "Coca-Cola Zero 350ml",
    categoria: "bebidas",
    preco: 7.90,
    descricao: "Coca-Cola sem açúcar, lata de 350ml.",
    emoji: "🥤",
    tag: "Zero açúcar",
    cor: "red"
  },
  {
    id: 22,
    nome: "Guaraná Antarctica 350ml",
    categoria: "bebidas",
    preco: 7.90,
    descricao: "Refrigerante de guaraná, lata de 350ml.",
    emoji: "🥤",
    tag: "Geladinho",
    cor: "gold"
  },
  {
    id: 23,
    nome: "Fanta Laranja 350ml",
    categoria: "bebidas",
    preco: 7.90,
    descricao: "Refrigerante sabor laranja, lata de 350ml.",
    emoji: "🥤",
    tag: "Laranja",
    cor: "orange"
  },
  {
    id: 24,
    nome: "Fanta Uva 350ml",
    categoria: "bebidas",
    preco: 7.90,
    descricao: "Refrigerante sabor uva, lata de 350ml.",
    emoji: "🥤",
    tag: "Uva",
    cor: "red"
  },
  {
    id: 25,
    nome: "Sprite 350ml",
    categoria: "bebidas",
    preco: 7.90,
    descricao: "Refrigerante sabor limão, lata de 350ml.",
    emoji: "🥤",
    tag: "Limão",
    cor: "gold"
  },
  {
    id: 26,
    nome: "Coca-Cola 2 Litros",
    categoria: "bebidas",
    preco: 14.90,
    descricao: "Coca-Cola original, garrafa de 2 litros.",
    emoji: "🥤",
    tag: "Família",
    cor: "red"
  },
  {
    id: 27,
    nome: "Guaraná Antarctica 2 Litros",
    categoria: "bebidas",
    preco: 13.90,
    descricao: "Refrigerante de guaraná, garrafa de 2 litros.",
    emoji: "🥤",
    tag: "Família",
    cor: "gold"
  },
  {
    id: 28,
    nome: "Fanta Laranja 2 Litros",
    categoria: "bebidas",
    preco: 13.90,
    descricao: "Refrigerante sabor laranja, garrafa de 2 litros.",
    emoji: "🥤",
    tag: "Família",
    cor: "orange"
  },

  // ÁGUA E SUCOS

  {
    id: 29,
    nome: "Água Mineral 500ml",
    categoria: "bebidas",
    preco: 5.90,
    descricao: "Água mineral 500ml, com ou sem gás.",
    emoji: "💧",
    tag: "Refrescante",
    cor: "gold"
  },
  {
    id: 30,
    nome: "Suco de Laranja 300ml",
    categoria: "bebidas",
    preco: 10.90,
    descricao: "Suco natural de laranja.",
    emoji: "🥤",
    tag: "Natural",
    cor: "orange"
  },
  {
    id: 31,
    nome: "Suco de Maracujá 300ml",
    categoria: "bebidas",
    preco: 11.90,
    descricao: "Suco natural de maracujá.",
    emoji: "🥤",
    tag: "Natural",
    cor: "gold"
  },
  {
    id: 32,
    nome: "Suco de Morango 300ml",
    categoria: "bebidas",
    preco: 12.90,
    descricao: "Suco natural de morango.",
    emoji: "🥤",
    tag: "Natural",
    cor: "red"
  },
  {
    id: 33,
    nome: "Suco de Abacaxi 300ml",
    categoria: "bebidas",
    preco: 10.90,
    descricao: "Suco natural de abacaxi.",
    emoji: "🥤",
    tag: "Natural",
    cor: "gold"
  },

  // MILK-SHAKES

  {
    id: 34,
    nome: "Milk-shake Chocolate 400ml",
    categoria: "bebidas",
    preco: 19.90,
    descricao: "Milk-shake cremoso sabor chocolate.",
    emoji: "🥤",
    tag: "Milk-shake",
    cor: "red"
  },
  {
    id: 35,
    nome: "Milk-shake Morango 400ml",
    categoria: "bebidas",
    preco: 19.90,
    descricao: "Milk-shake cremoso sabor morango.",
    emoji: "🥤",
    tag: "Milk-shake",
    cor: "red"
  },
  {
    id: 36,
    nome: "Milk-shake Baunilha 400ml",
    categoria: "bebidas",
    preco: 19.90,
    descricao: "Milk-shake cremoso sabor baunilha.",
    emoji: "🥤",
    tag: "Milk-shake",
    cor: "gold"
  },

  // 5. SOBREMESAS

  {
    id: 37,
    nome: "Brownie com Sorvete",
    categoria: "sobremesas",
    preco: 22.90,
    descricao: "Brownie de chocolate acompanhado de sorvete.",
    emoji: "🍫🍨",
    tag: "Sobremesa",
    cor: "red"
  },
  {
    id: 38,
    nome: "Petit Gâteau",
    categoria: "sobremesas",
    preco: 25.90,
    descricao: "Bolinho de chocolate cremoso com sorvete.",
    emoji: "🍰🍨",
    tag: "Especial",
    cor: "orange"
  },
  {
    id: 39,
    nome: "Cookie Recheado",
    categoria: "sobremesas",
    preco: 12.90,
    descricao: "Cookie com gotas de chocolate e recheio cremoso.",
    emoji: "🍪",
    tag: "Doce",
    cor: "gold"
  }
];

// ========================================
// ELEMENTOS DO HTML
// ========================================

const grid = document.getElementById("productsGrid");
const filters = document.getElementById("filters");
const searchInput = document.getElementById("searchInput");
const cartDrawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("overlay");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const toast = document.getElementById("toast");

let categoriaAtual = "todos";
let carrinho = carregarCarrinho();
let toastTimer;

// ========================================
// UTILITÁRIOS
// ========================================

function dinheiro(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function escaparHTML(texto) {
  return String(texto).replace(/[&<>"']/g, caractere => {
    const entidades = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entidades[caractere];
  });
}

// ========================================
// RENDERIZAR PRODUTOS
// ========================================

function renderizarProdutos() {
  const busca = searchInput.value
    .toLocaleLowerCase("pt-BR")
    .trim();

  const filtrados = produtos.filter(produto => {
    const categoriaValida =
      categoriaAtual === "todos" ||
      produto.categoria === categoriaAtual;

    const texto = (
      produto.nome + " " + produto.descricao
    ).toLocaleLowerCase("pt-BR");

    return categoriaValida && texto.includes(busca);
  });

  grid.innerHTML = filtrados.map(produto => `
    <article class="product-card">
      <div class="product-image ${produto.cor}">
        <span class="tag">${escaparHTML(produto.tag)}</span>
        <span class="emoji" aria-hidden="true">${produto.emoji}</span>
      </div>

      <div class="product-info">
        <h3>${escaparHTML(produto.nome)}</h3>
        <p>${escaparHTML(produto.descricao)}</p>

        <div class="product-bottom">
          <strong>${dinheiro(produto.preco)}</strong>
          <button
            class="add-btn"
            type="button"
            data-add="${produto.id}"
          >
            Adicionar +
          </button>
        </div>
      </div>
    </article>
  `).join("");

  const emptyMessage = document.getElementById("emptyMessage");

  if (emptyMessage) {
    emptyMessage.hidden = filtrados.length > 0;
  }
}

// ========================================
// FILTROS E PESQUISA
// ========================================

filters.addEventListener("click", evento => {
  const botao = evento.target.closest("[data-category]");

  if (!botao) return;

  categoriaAtual = botao.dataset.category;

  document.querySelectorAll(".filter").forEach(item => {
    item.classList.toggle("active", item === botao);
  });

  renderizarProdutos();
});

searchInput.addEventListener("input", renderizarProdutos);

// ========================================
// ADICIONAR PRODUTOS AO CARRINHO
// ========================================

grid.addEventListener("click", evento => {
  const botao = evento.target.closest("[data-add]");

  if (!botao) return;

  adicionarProduto(Number(botao.dataset.add));
});

function adicionarProduto(id) {
  const produto = produtos.find(item => item.id === id);

  if (!produto) return;

  carrinho[id] = Math.min(
    99,
    (carrinho[id] || 0) + 1
  );

  salvarCarrinho();
  renderizarCarrinho();
  mostrarToast(`${produto.nome} adicionado ao pedido!`);
}

// ========================================
// LOCAL STORAGE
// ========================================

const CHAVE_CARRINHO = "brasa-carrinho-v2";

function salvarCarrinho() {
  try {
    localStorage.setItem(
      CHAVE_CARRINHO,
      JSON.stringify(carrinho)
    );
  } catch (erro) {
    console.warn("Erro ao salvar carrinho:", erro);
  }
}

function carregarCarrinho() {
  try {
    const salvo = JSON.parse(
      localStorage.getItem(CHAVE_CARRINHO) || "{}"
    );

    if (
      !salvo ||
      typeof salvo !== "object" ||
      Array.isArray(salvo)
    ) {
      return {};
    }

    const resultado = {};

    for (const [id, quantidade] of Object.entries(salvo)) {
      const produtoExiste = produtos.some(
        produto => produto.id === Number(id)
      );

      if (
        produtoExiste &&
        Number.isInteger(quantidade) &&
        quantidade > 0
      ) {
        resultado[id] = Math.min(quantidade, 99);
      }
    }

    return resultado;
  } catch (erro) {
    return {};
  }
}

// ========================================
// RENDERIZAR CARRINHO
// ========================================

function renderizarCarrinho() {
  const itens = produtos.filter(
    produto => carrinho[produto.id] > 0
  );

  const quantidadeTotal = itens.reduce(
    (total, produto) => total + carrinho[produto.id],
    0
  );

  const subtotal = itens.reduce(
    (total, produto) =>
      total + produto.preco * carrinho[produto.id],
    0
  );

  cartCount.textContent = quantidadeTotal;
  cartTotal.textContent = dinheiro(subtotal);

  if (itens.length === 0) {
    cartItems.innerHTML = `
      <p style="text-align:center;padding:35px 10px;color:#806c60">
        Seu carrinho está vazio. 🍔
        <span style="display:block;margin-top:8px">
          Escolha seus produtos no cardápio!
        </span>
      </p>
    `;
    return;
  }

  cartItems.innerHTML = itens.map(produto => `
    <div class="cart-item">
      <span style="font-size:35px" aria-hidden="true">
        ${produto.emoji}
      </span>

      <div class="cart-item-info">
        <h4>${escaparHTML(produto.nome)}</h4>
        <small>${dinheiro(produto.preco)} cada</small>
      </div>

      <div class="qty-controls">
        <button
          type="button"
          data-change="${produto.id}"
          data-delta="-1"
          aria-label="Diminuir ${escaparHTML(produto.nome)}"
        >−</button>

        <strong>${carrinho[produto.id]}</strong>

        <button
          type="button"
          data-change="${produto.id}"
          data-delta="1"
          aria-label="Aumentar ${escaparHTML(produto.nome)}"
        >+</button>
      </div>
    </div>
  `).join("");
}

// ========================================
// ALTERAR QUANTIDADE NO CARRINHO
// ========================================

cartItems.addEventListener("click", evento => {
  const botao = evento.target.closest("[data-change]");

  if (!botao) return;

  const id = Number(botao.dataset.change);
  const delta = Number(botao.dataset.delta);

  if (!produtos.some(produto => produto.id === id)) {
    return;
  }

  if (delta !== 1 && delta !== -1) {
    return;
  }

  carrinho[id] = Math.min(
    99,
    Math.max(0, (carrinho[id] || 0) + delta)
  );

  if (carrinho[id] === 0) {
    delete carrinho[id];
  }

  salvarCarrinho();
  renderizarCarrinho();
});

// ========================================
// ABRIR E FECHAR CARRINHO
// ========================================

function abrirCarrinho() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  overlay.hidden = false;
  document.body.style.overflow = "hidden";
}

function fecharCarrinho() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  overlay.hidden = true;
  document.body.style.overflow = "";
}

document.getElementById("openCart")
  .addEventListener("click", abrirCarrinho);

document.getElementById("closeCart")
  .addEventListener("click", fecharCarrinho);

overlay.addEventListener("click", fecharCarrinho);

document.addEventListener("keydown", evento => {
  if (evento.key === "Escape") {
    fecharCarrinho();
  }
});

// ========================================
// FINALIZAR PEDIDO PELO WHATSAPP
// ========================================

document.getElementById("checkout")
  .addEventListener("click", () => {
    const itens = produtos.filter(
      produto => carrinho[produto.id] > 0
    );

    if (itens.length === 0) {
      mostrarToast("Adicione produtos antes de finalizar.");
      return;
    }

    if (CONFIG.whatsapp === "5511999999999") {
      mostrarToast("Configure o WhatsApp real no app.js.");
      return;
    }

    const linhas = itens.map(produto => {
      const quantidade = carrinho[produto.id];
      const totalProduto = produto.preco * quantidade;

      return `${quantidade}x ${produto.nome} — ${dinheiro(totalProduto)}`;
    });

    const subtotal = itens.reduce(
      (total, produto) =>
        total + produto.preco * carrinho[produto.id],
      0
    );

    const mensagem = [
      `Olá! Gostaria de fazer um pedido na ${CONFIG.nome}:`,
      "",
      ...linhas,
      "",
      `Subtotal: ${dinheiro(subtotal)}`,
      "",
      "Gostaria de confirmar a disponibilidade, a entrega ou retirada e o valor final."
    ].join("\n");

    const url =
      `https://wa.me/${CONFIG.whatsapp}?text=` +
      encodeURIComponent(mensagem);

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  });

// ========================================
// BOTÃO DE CONTATO
// ========================================

const contato = document.getElementById("contactWhatsApp");

if (contato) {
  contato.href =
    `https://wa.me/${CONFIG.whatsapp}?text=` +
    encodeURIComponent(
      "Olá! Gostaria de saber mais sobre o cardápio."
    );

  contato.addEventListener("click", evento => {
    if (CONFIG.whatsapp === "5511999999999") {
      evento.preventDefault();
      mostrarToast("Configure o WhatsApp real no app.js.");
    }
  });
}

// ========================================
// MENU MOBILE
// ========================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const aberto = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(aberto)
    );
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );
    });
  });
}

// ========================================
// NOTIFICAÇÕES
// ========================================

function mostrarToast(mensagem) {
  if (!toast) {
    console.log(mensagem);
    return;
  }

  toast.textContent = mensagem;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

// ========================================
// INICIALIZAÇÃO
// ========================================

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

renderizarProdutos();
renderizarCarrinho();

console.log(
  `Brasa Burger iniciado com ${produtos.length} produtos!`
);
